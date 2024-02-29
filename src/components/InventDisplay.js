import inventData from '../files/invent.json' 

export const InventDisplay = ()=>{
    return(
        <div>
            <div>
                <h1>Mina böcker</h1>
                {inventData.böcker.map((bok) => (
                    <div key={bok.id}>
                        <h3>Författare: {bok.Författare}</h3>
                        <p>År: {bok.utgivningsår}</p>
                        <p>Genre: {bok.genre}</p>
                    </div>
                    ))}
            </div>

            <div>
                <h1>Mina Cd</h1>
                {inventData.cdsivor.map((cd) => (
                    <div key={cd.id}>
                        <h3>Namn: {cd.cdnamn}</h3>
                        <p>Genre: {cd.genre}</p>
                    </div>
                    ))}
            </div>
        </div>
    )
}