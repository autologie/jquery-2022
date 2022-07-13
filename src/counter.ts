export function setupCounter($element: JQuery<HTMLElement>) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    $element.text(`count is ${counter}`);
  };
  $element.on("click", () => setCounter(++counter));
  setCounter(0);
}
