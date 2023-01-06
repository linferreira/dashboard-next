const formatDate = (date: string | undefined) => {
  if (!date) return '';

  const newDate = new Date(date);

  return new Intl.DateTimeFormat('pt-BR').format(newDate);
};


export default formatDate;