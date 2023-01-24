export const convertEmail = (frontEmail, backEmail) => {
  if (frontEmail && backEmail) {
    return frontEmail + '@' + backEmail;
  }
  if (frontEmail) return frontEmail;
  if (backEmail) return '@' + backEmail;
};

export const convertDate = (date) => {
  if (!date) return;
  const year = new Date(date).getFullYear() + '';
  const month = new Date(date).toLocaleDateString('default', { month: '2-digit' });
  const day = new Date(date).toLocaleDateString('default', { day: '2-digit' });
  return year + '-' + month + '-' + day;
};
