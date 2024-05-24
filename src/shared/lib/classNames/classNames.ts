export type ClassNamesMods = Record<string, boolean | string>

export const classNames = (cls: string, mods: ClassNamesMods = {}, additional: string[] = []): string => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        .filter(([, value]) => Boolean(value))
        .map(([className]) => className),
].join(' ');
