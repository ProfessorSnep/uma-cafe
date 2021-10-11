/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ImageTag = "thumb" | "shoubufuku" | "seifuku" | "proto" | "icon" | "counterpart";

export interface CharacterInfo {
  /**
   * Basic character information
   */
  info: {
    name: {
      native: string;
      translated: string;
    };
    /**
     * The internal game ID of the character
     */
    gameId?: number;
    /**
     * Character bio information
     */
    bio?: {
      intro?: string;
      about?: string;
      /**
       * The character's birthday
       */
      birthday?: {
        year?: number;
        month: number;
        day: number;
      };
      /**
       * The character's physical sizes (measured in cm)
       */
      sizes?: {
        height?: number;
        bust?: number;
        waist?: number;
        hips?: number;
        shoes?: string;
      };
      weight?: string;
      class?: string;
      dorm?: string;
      strength?: string;
      weakness?: string;
      secret?: string;
      onEars?: string;
      onTail?: string;
      onFamily?: string;
    };
    /**
     * Information about the character's seiyuu/voice
     */
    voice?: {
      voiceSample?: string;
      nativeName: string;
      romanizedName: string;
      wikipediaUrlJP?: string;
      wikipediaUrlEN?: string;
      anilistUrl?: string;
      malUrl?: string;
    };
    /**
     * Information about the real-life counterpart of the character
     */
    counterpart?: {
      sex?: "male" | "female";
      record?: {
        total: number;
        wins: number;
      };
      notableRaces?: {
        name: string;
        year: number;
        place: number;
      }[];
      wikipediaUrlJP?: string;
      wikipediaUrlEN?: string;
      netkeibaUrl?: string;
    };
    /**
     * Image hex colors for the character
     */
    colors?: {
      main: string;
      sub: string;
    };
  };
  /**
   * List of images of the character
   */
  images: {
    tag: ImageTag;
    /**
     * File path to the image relative to the /public/images folder
     */
    file: string;
  }[];
  [k: string]: unknown;
}
