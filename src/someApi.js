/**
 * Stub method that pretends to call some API with a 2.5 second response time.
 */
export async function callSomeApi() {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  return [
    { id: "a1", text: "Hello" },
    { id: "b2", text: "world!" },
  ];
}
