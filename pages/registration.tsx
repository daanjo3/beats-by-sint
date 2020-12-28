import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../components/layout.module.css'

export default function Registration() {
  const router = useRouter();
  const [name, setName] = useState('');;
  const [birthDate, setBirthDate] = useState('');
  const [petName, setPetName] = useState('');
  const [profession, setProfession] = useState('');
  
  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    localStorage.setItem('name', e.currentTarget.value);
  }

  const handleBirthDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    setBirthDate(e.currentTarget.value);
    localStorage.setItem('birthdate', e.currentTarget.value);
  }

  const handlePetNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPetName(e.currentTarget.value);
    localStorage.setItem('petname', e.currentTarget.value);
  }

  const handleProfessionChange = (e: React.FormEvent<HTMLInputElement>) => {
    setProfession(e.currentTarget.value);
    localStorage.setItem('profession', e.currentTarget.value);
  }

  useEffect(() => {
    const storeName = localStorage.getItem('name');
    if (storeName !== null) setName(storeName);

    const storeBirthDate = localStorage.getItem('birthdate');
    if (storeBirthDate !== null) setBirthDate(storeBirthDate);

    const storePetName = localStorage.getItem('petname');
    if (storePetName !== null)  setPetName(storePetName);

    const storeProfession = localStorage.getItem('profession');
    if (storeProfession !== null) setProfession(storeProfession);
  }, [])

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/finish')
  }

  return (
    <body className={styles.homepage_body}>
      <form onSubmit={submitForm}>
        <p>
          <label><b>Naam</b></label><br/>
          <input className={styles.formInput} onChange={handleNameChange} value={name} type="text"/>
        </p>
        <p>
          <label><b>Geboortedatum</b></label><br/>
          <input className={styles.formInput} onChange={handleBirthDateChange} value={birthDate} type="date"/>
        </p>
        <p>
          <label><b>Naam favoriete huisdier</b></label><br/>
          <input className={styles.formInput} onChange={handlePetNameChange} value={petName} type="text"/>
        </p>
        <p>
          <label><b>Toekomstig beroep</b></label><br/>
          <input type="radio" id="psycholoog" name="profession" value="psycholoog" checked={profession === 'psycholoog'} onClick={handleProfessionChange}/>
          <label> Psycholoog</label><br/>
          <input type="radio" id="Mantelzorger" name="profession" value="mantelzorger" checked={profession === 'mantelzorger'} onClick={handleProfessionChange}/>
          <label> Mantelzorger</label><br/>
        </p>

        <p>
          <label>Niet zeker wat je gaat worden?</label><br/>
          <Link href='/quiz'><button>Doe de test!</button></Link>
        </p>

        <input type="submit" value="Registreer"/>
      </form>
    </body>
  )
}
