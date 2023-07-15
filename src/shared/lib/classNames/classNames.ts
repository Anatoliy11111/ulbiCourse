type Mods = Record<string, boolean | string>



export function classNames(cls:string, mods?: Mods, additional?:string[]) {

    return [
        cls,
        ...(additional ?? []),
        Object.entries(mods ?? {})?.filter(([className, values])=> Boolean(values))?.map(([className])=> className)
    ].join(' ')

}