import request from "supertest";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { app } from "./index.js";

/**
 * @type {import('http').Server}
 */
let server;

beforeAll(() => {
	server = app.listen(3000);
});

afterAll(() => {
	if (server) {
		server.close();
	}
});

describe("GET /", () => {
	it("should return Hello World!", async () => {
		const res = await request(server).get("/");
		expect(res.status).toBe(200);
		expect(res.text).toBe("Hello World!");
	});
});
