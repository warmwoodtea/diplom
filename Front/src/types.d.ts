declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.json" {
  export default any;
}
