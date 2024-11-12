"use client"

import React, { useState } from 'react'


function Addcontact() {
	// States
	const [fullname, setfullname] = useState('');
	const [number, setNumber] = useState('');

	// Funcion para obtener valores del formulario
	const handleSubmit = async(e) => {
		e.preventDefault()
		console.log(fullname, number)

		const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contactos`, {
				method: "POST",
				body: JSON.stringify({nombre: fullname, numero: number}),
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
		console.log(res.status)
		console.log(res)
		const data = await res.json();
		console.log(data)
		console.log(a.name)
	}

	return (
		<div className="flex justify-items-start">
			<form onSubmit={handleSubmit} className="flex flex-col bg-indigo-400">
				<div className='py-4'>
				<label htmlFor='fullname' className='text-slate-900'> Nombre del contacto: </label>
				<input 
					type="text" 
					name="fullname"
					className='border-gray-950 border-2'
					onChange={e => setfullname(e.target.value)}    
				/>
				</div>
				<div className='py-4'>
				<label htmlFor='number' className='text-slate-900'> Número de teléfono:</label>
				<input 
					type="text" 
					name="number"
					className='border-gray-950 border-2'
					onChange={e => setNumber(e.target.value)}    
				/>
				</div>
				<button className='bg-cyan-200'>Enviar</button>
			</form>
		</div>

	)
}

export default Addcontact