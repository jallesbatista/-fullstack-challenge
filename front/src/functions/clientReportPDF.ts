import { IUserData } from "@/types";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Content, DynamicContent, TableCell, TDocumentDefinitions } from "pdfmake/interfaces";

const clientReportPDF = (user: IUserData, contacts: IUserData[]) => {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const formatedUserData: TableCell[] = [
    {
      text: user.name,
      margin: [0, 2, 0, 2],
      fontSize: 10,
    },
    {
      text: user.email,
      margin: [0, 2, 0, 2],
      fontSize: 10,
    },
    {
      text: user.tel.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4"),
      margin: [0, 2, 0, 2],
      fontSize: 10,
    },
  ];

  const formatedContactsData: TableCell[][] = contacts.map((contact) => {
    return [
      {
        text: contact.name,
        margin: [0, 2, 0, 2],
        fontSize: 10,
      },
      {
        text: contact.email,
        margin: [0, 2, 0, 2],
        fontSize: 10,
      },
      {
        text: contact.tel.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4"),
        margin: [0, 2, 0, 2],
        fontSize: 10,
      },
    ];
  });

  const title: TDocumentDefinitions["header"] = [
    {
      text: `Relatório de dados (${new Date()
        .toISOString()
        .split("T")[0]
        .split("-")
        .reverse()
        .join("/")})`,
      fontSize: 16,
      bold: true,
      margin: [15, 20, 0, 45],
    },
  ];

  const details: Content = [
    "            ",
    { text: "Cliente:", style: "header", fontSize: 14 },
    {
      table: {
        headerRows: 1,
        widths: ["*", "*", "*"],
        body: [
          [
            {
              text: "Nome",
              style: "tableHeader",
              fontSize: 12,
            },
            {
              text: "E-mail",
              style: "tableHeader",
              fontSize: 12,
            },
            {
              text: "Telefone (Celular)",
              style: "tableHeader",
              fontSize: 12,
            },
          ],
          formatedUserData,
        ],
      },
      layout: "lightHorizontalLines",
    },
    "            ",
    { text: "Contatos:", style: "header", fontSize: 14 },
    {
      table: {
        headerRows: 1,
        widths: ["*", "*", "*"],
        body: [
          [
            {
              text: "Nome",
              style: "tableHeader",
              fontSize: 12,
            },
            {
              text: "E-mail",
              style: "tableHeader",
              fontSize: 12,
            },
            {
              text: "Telefone (Celular)",
              style: "tableHeader",
              fontSize: 12,
            },
          ],
          ...formatedContactsData,
        ],
      },
      layout: "lightHorizontalLines",
    },
  ];

  const footerDinamic: DynamicContent = (currentPage, pageCount) => {
    return [
      {
        text: currentPage + " / " + pageCount,
        alignment: "right",
        fontSize: 8,

        margin: [0, 10, 20, 0],
      },
    ];
  };

  const docDefinition: TDocumentDefinitions = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 40],
    header: [title],
    content: [details],
    footer: footerDinamic,
  };
  pdfMake.createPdf(docDefinition).open();
};

export default clientReportPDF;
