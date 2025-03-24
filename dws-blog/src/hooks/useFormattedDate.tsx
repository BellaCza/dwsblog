import { useState, useEffect } from 'react';

/**
 * A hook that takes a date string and returns a formatted date string
 * in the format "Month DD, YYYY".
 *
 * @param {string} dateString The date string to format, in ISO 8601 format.
 * @returns {string} A string representing the formatted date.
 */
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