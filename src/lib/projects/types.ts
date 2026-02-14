export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectMeta {
  role?: string;
  environment?: string;
  duration?: string;
  stack?: string[];
}

export interface ProjectLinks {
  live?: string;
  repo?: string;
}

export interface ProjectArchitecture {
  frontend?: string;
  cms?: string;
  data?: string;
  deployment?: string;
}

export interface ProjectContent {
  slug: string;
  title?: string;
  summary?: string;
  heroImage?: ProjectImage;
  video?: string;

  meta?: ProjectMeta;
  links?: ProjectLinks;

  overview?: {
    scope?: string;
    responsibility?: string;
  };

  problem?: string;
  constraints?: string[];
  approach?: string;

  architecture?: ProjectArchitecture;

  execution?: string[];
  outcomes?: string[];

  reflection?: string;
}
