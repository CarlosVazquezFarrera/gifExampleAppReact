import { getGif } from "../../src/helpers/getGif";

describe("getGif", () => {
  const topic = "juego de tronos";
  test("should return data", async () => {
    const gifs = await getGif(topic);
    expect(gifs.length).toBeGreaterThan(0);
    const fisrt = gifs[0];
    expect(fisrt).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
