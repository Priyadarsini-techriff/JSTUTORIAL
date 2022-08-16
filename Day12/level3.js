//1.Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

let cleanText = (text) => {
    let pattern = /[~|@|#|!|$|%|\^|&|;|\\?]/g;
    let cleanedText = text.replace(pattern, '')
    return tenMostFrequentWords(cleanedText);
 }
 console.log(cleanText(sentence));
 //2
 sentence1=`I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher`
 const threeMostFrequentWords = (Text, range=3) => {
    let pattern = /[a-z|A-Z]*/g;
    return Object.entries(Text.match(pattern).reduce((dict, word) => {
       dict[word] = (dict[word] || 0) +1;
       return dict;
    }, {})).sort((a, b) => b[1]-a[1]).slice(0, range);
 }
 threeMostFrequentWords(sentence1).forEach(x => console.log(x))
 