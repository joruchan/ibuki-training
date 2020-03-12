import { sanitize } from 'dompurify';

const sanitinizer = (content) => ({
  __html: sanitize(content),
});

export default sanitinizer;
