export const types = (type: string): string => {
    const estilos = [
        { type: 'water', color: 'rgb(59, 205, 231)' },
        { type: 'fire', color: 'rgb(236, 97, 32)' },
        { type: 'poison', color: 'rgb(32, 236, 59)' },
        { type: 'grass', color: 'rgba(129, 247, 178, 0.979)' },
        { type: 'bug', color: 'rgba(154, 207, 68, 0.979)' },
        { type: 'ground', color: 'rgba(161, 163, 157, 0.979)' },
        { type: 'normal', color: 'rgba(169, 250, 8, 0.979)' },
        { type: 'fighting', color: 'rgba(250, 64, 8, 0.979)' },
        { type: 'psychic', color: 'rgba(250, 246, 8, 0.979)' },
        { type: 'rock', color: 'rgba(230, 229, 225, 0.979)' },
        { type: 'electric', color: 'rgba(44, 226, 44, 0.979)' },
        { type: 'ghost', color: '#9A9A9A' },
        { type: 'fairy', color: 'rgba(233, 156, 229, 0.884)' },
        { type: 'ice', color: 'rgb(24, 109, 236)' },
        { type: 'dragon', color: 'rgb(236, 222, 24)' },
        { type: 'dark', color: ' rgb(129, 129, 127)' },
        { type: 'steel', color: ' #747474' },
        { type: 'flying', color: ' #0177BD' },
    ]
    const color = estilos.find(estilo => estilo.type === type);
    if (color === undefined) {
        return 'black';

    } else {
        return color.color;
    }

}