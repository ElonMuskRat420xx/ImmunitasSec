import { useState } from 'react'
import styled from 'styled-components';
import {SectionTitle, SectionText } from '../../styles/GlobalComponents';
import ServiceButton from '../../styles/GlobalComponents/ServiceButton'

export default function ContactForm() {
	const [inputs, setInputs] = useState({
		firstname: '',
		lastname: '',
		company: '',
		email: '',
		message: '',
	})

	const [form, setForm] = useState('')

	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}))
	}

	const onSubmitForm = async (e) => {
		e.preventDefault()

		if (inputs.firstname && inputs.lastname && inputs.company && inputs.email && inputs.message) {
			setForm({ state: 'loading' })
			try {
				const res = await fetch(`api/contact`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(inputs),
				})

				const { error } = await res.json()

				if (error) {
					setForm({
						state: 'error',
						message: error,
					})
					return
				}

				setForm({
					state: 'success',
					message: 'Your message was sent successfully.',
				})
				setInputs({
					firstname: '',
					lastname: '',
					company: '',
					email: '',
					message: '',
				})
			} catch (error) {
				setForm({
					state: 'error',
					message: 'Something went wrong',
				})
			}
		}
	}
	return (
		
    <div>
<TextBox>
		<SectionTitle>
		Take Control Of Your Security
		</SectionTitle>
		<SectionText>
		Speak to an advisor to see how Immunitas can help your business.
		</SectionText>
</TextBox>
			<Form  onSubmit={(e) => onSubmitForm(e)}>

				<NamesGrid>
				<InputNames
					id='firstname'
					type='text'
					value={inputs.firstname}
					onChange={handleChange}
					placeholder='First Name'
					required
				/>

				<InputNames
					id='lastname'
					type='text'
					value={inputs.lastname}
					onChange={handleChange}
					placeholder='Last Name'
					required
				/>
				</NamesGrid>
				<Input
					id='email'
					type='email'
					value={inputs.email}
					onChange={handleChange}
					placeholder='Business Email'
					required
				/>

				<Input
					id='company'
					type='text'
					value={inputs.company}
					onChange={handleChange}
					placeholder='Company'
					required
				/>

				<Textarea
					id='message'
					type='text'
					value={inputs.message}
					onChange={handleChange}
					placeholder='How Can We Help You?'
					rows='5'
					required
				/>

				<ServiceButton>
				<input type='submit' />
				</ServiceButton>

				{form.state === 'loading' ? (
					<div>Sending....</div>
				) : form.state === 'error' ? (
					<div>{form.message}</div>
				) : (
					form.state === 'success' && 
          
          <div>
      Sent successfully 
          </div>
				)}
			</Form>
		</div>
	)
}

const Form = styled.form`
display: grid;
grid-gap: 2rem;
padding: 1rem;


@media ${(props) => props.theme.breakpoints.sm} {
    width: 30rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 50rem;
  }
`;

const Textarea = styled.textarea`  
 border-radius:0.5rem;
 padding-block:1rem;
 padding-left:1rem;
 color: black;
 width:50rem;
 height:20rem;
 overflow-y: auto;
 scrollbar-width: thin;         
 scrollbar-color: black; 
 outline: none;
 resize: none;


::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}
::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}
::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color:  rgba(255, 255, 255, .01);
}

 @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;

  }

 `;

const Input = styled.input`
border-radius:0.5rem;
padding-block:1rem;
padding-left:1rem;
color: black;
background-color:white;
width:50rem;
outline: none;

@media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`;


const InputNames = styled.input`
border-radius:0.5rem;
padding-block:1rem;
padding-left:1rem;
color: black;
width:24rem;
outline: none;

@media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`;


const NamesGrid = styled.div`

display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 2rem;

`

const TextBox = styled.div`

width:50rem;
padding-inline:1rem;

@media ${(props) => props.theme.breakpoints.sm} {
    width: 30rem;
   
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 50rem;
 
  }

`;

