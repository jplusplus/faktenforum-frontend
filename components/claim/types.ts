export type SourceInfo = {
  key: string;
  file: File;
  sourceType: string;
  sourceUrl: string;
};

export type Claim = {
  title: string;
  description: string;
  sources: SourceInfo[];
};
