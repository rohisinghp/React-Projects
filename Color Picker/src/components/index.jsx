import { useState } from "react"

export function ColorPicker() {

    const [Color, setColor] = useState("#9D745E")
    const [typeofcolor, setTypeofcolor] = useState('hex')

    const handle = (choice) => {
        setTypeofcolor(choice);
        console.log(typeofcolor)
    }

    const randomNoGenerator = (len) => {
        return Math.floor(Math.random() * len);
    }

    const randomhexGenerator = () => {
        const picker = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"]
        let pick = "#"
        for (let i = 0; i < 6; i++)
            pick += picker[randomNoGenerator(picker.length)]
        setColor(pick);
        console.log(Color)
    }


    const randomrgbpicker = () => {
        return Math.floor(Math.random() * 256);
    }

    const randomrgbGenerator = () => {
       
        const r = randomrgbpicker();
        const g = randomrgbpicker();
        const b = randomrgbpicker();

        setColor(`rgb(${r},${g},${b})`);
        
    }

    return (
        <div
            style={{
                margin:'0',
                padding: '0',
                width: '100vw',
                height: '100vh',
                background: Color,
            }}
        >
            <div style={{

                width: '400px',
                margin: '0 auto',

            }}>
                <button style={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '6px 8px', margin: '5px', border: 'none', borderRadius: '3px' }} onClick={() => handle('hex')}>HEX picker</button>
                <button style={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '6px 8px', margin: '5px', border: 'none', borderRadius: '3px' }} onClick={() => handle('rgb')}>RGB picker</button>
                <button style={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '6px 8px', margin: '5px', border: 'none', borderRadius: '3px' }} onClick={typeofcolor === 'hex' ? randomhexGenerator : randomrgbGenerator}>Random Color Selector</button>

            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h1 style={{fontSize: '5rem'}}>
                    Color
                </h1>
                <h1 >
                    {typeofcolor}
                </h1>
                <h1 style={{fontSize: '6rem'}}>
                    {Color}
                </h1>
            </div>
        </div>
    )
}