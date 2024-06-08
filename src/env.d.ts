/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_POKEAPI: string;
	readonly PUBLIC_POKEMON_BATTLE_FORGE_API: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
