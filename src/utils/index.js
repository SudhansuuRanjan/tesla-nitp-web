export function calculateMinuteRead(blogText) {
  const AVERAGE_WORDS_PER_MINUTE = 160;

  // Remove HTML tags using a regular expression
  const cleanText = blogText.replace(/<\/?[^>]+(>|$)/g, "");
  // Split the text into words
  const words = cleanText.split(/\s+/);
  // Calculate the estimated reading time in minutes
  const minuteRead = Math.ceil(words.length / AVERAGE_WORDS_PER_MINUTE);
  return minuteRead;
}
