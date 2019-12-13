declare module '*.css' {
  interface ClassNames {
    [name: string]: string
  }

  const classNames: ClassNames;

  export = classNames;
}

declare module "*.json" {
  const content: any;

  export = content;
}

declare module '*.gif' {
  const image: any;

  export = image;
}

declare module '*.png' {
  const image: any;

  export = image;
}