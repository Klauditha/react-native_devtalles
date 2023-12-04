export const BasicTypes = () => {

    const name: string = 'Cristian';
    const age:number = 30;
    const isActive: boolean = true;
    //const powers:unknown = [];
    const powers: string[] = ['Reactr', 'Angular', 'Vue'];
    powers.push('Next');
    return (
        <>
            <h3>Tipos básicos</h3>
            {name} {age} {isActive ? 'true' : 'false'}
            <br/>
            {powers.join(', ')}
        </>
    )
}
