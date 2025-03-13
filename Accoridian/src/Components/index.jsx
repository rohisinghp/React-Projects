import React, { useEffect, useState } from 'react'
import data from './data'
import './style.css'

function Accordian() {

    const [setselected, setSetselected] = useState(null)
    const [multiselection, setMultiselection] = useState(false)
    const [multi, setMulti] = useState([])

    const handleClick = (dataitem) => {

        (dataitem.id === setselected) ?
            setSetselected(null) :
            setSetselected(dataitem.id)

        console.log(setselected)
        console.log(multiselection)
        console.log(multi)
        setMulti([])

    }
    const handle = (id) => {
        const cpymultiple = [...multi];
        const index = cpymultiple.indexOf(id)
        index === -1 ? cpymultiple.push(id) : cpymultiple.splice(index, 1)
        setMulti(cpymultiple);


    }

    return (
        <div className='container'>
            <button className='btn' onClick={() => setMultiselection(!multiselection)}>set Multiple Selection</button>
            {
                data.map(dataitem => <div className='section'>
                    <h3>{dataitem.ques}</h3>
                    <span className='plus' onClick={multiselection ? () => handle(dataitem.id) : () => handleClick(dataitem)}> + </span>
                    <div>
                        {
                           multiselection?
                           multi.indexOf(dataitem.id) !==-1 && <div>{dataitem.ans}</div> :
                           dataitem.id === setselected && <div>{dataitem.ans}</div>
                        }

{/* --------------------------------Alternative of above code in Sort---------------- */}

                        {/* {dataitem.id === setselected || multi.indexOf(dataitem.id) !== -1 ?
                            <div>{dataitem.ans}</div> :
                            null} */}
                    </div>
                </div>

                )
            }

        </div>
    )
}

export default Accordian