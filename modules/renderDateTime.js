 const dateTime = () => {
    const date = new Date();
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour24: true,
    };
    return date.toLocaleString('en-US', options);
  };
  
  export default dateTime;