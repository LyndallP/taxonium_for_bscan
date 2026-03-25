export interface DeckSize {
  width: number;
  height: number;
}

export interface ColorRamp {
  scale: [number, string][];
}

export interface ColorRamps {
  [key: string]: ColorRamp;
}

export interface ColorPalettes {
  [key: string]: string[];
}



export interface HoverInfo<T> {
  x: number;
  y: number;
  object: T;
}
