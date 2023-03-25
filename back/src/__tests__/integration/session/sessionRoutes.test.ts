import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../../app";
import AppDataSource from "../../../data-source";
import { mockedClient, mockedClientLogin } from "../../mocks";

describe("/login", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => console.log("Error during Data Source initialization", err));

    await request(app).post("/client").send(mockedClient);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /login -  should be able to login with the user", async () => {
    const response = await request(app).post("/login").send(mockedClientLogin);

    expect(response.body).toHaveProperty("token");
    expect(response.status).toBe(200);
  });

  test("POST /login -  should not be able to login with the user with incorrect password or email", async () => {
    const response = await request(app).post("/login").send({
      email: "naoexiste@mail.com",
      password: "1234567",
    });

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(403);
  });
});
