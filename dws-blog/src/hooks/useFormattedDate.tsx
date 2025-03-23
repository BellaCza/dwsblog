import { useState, useEffect } from 'react';

const useFormattedDate = (dateString: string) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    setFormattedDate(formattedDate);
  }, [dateString]);

  return formattedDate;
};

export default useFormattedDate;