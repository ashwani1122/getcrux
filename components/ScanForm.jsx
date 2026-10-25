'use client';

import { useRef, useState } from 'react';

/* Scan page email form. The live scan has a backend that mails the report;
   this clone shows an inline success state instead (same as the static site). */
export default function ScanForm() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) {
      inputRef.current?.focus();
      return;
    }
    setDone(true);
  };

  return (
    <>
      <form className="sc-form reveal" id="scanForm" noValidate onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="email"
          id="scanEmail"
          placeholder="you@yourbrand.com"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className={done ? 'sc-run done' : 'sc-run'} id="scanBtn">
          {done ? '✓ Report on its way' : 'Run my free scan'}
        </button>
      </form>
      <p className="sc-note reveal" id="scanNote">
        {done
          ? 'Thanks! Your scan for ' + email + ' is queued — the full report will land in your inbox within 24 hours.'
          : 'Free · No ad account access · Report in your inbox within 24 hours'}
      </p>
    </>
  );
}
