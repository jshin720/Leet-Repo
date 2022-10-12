function mostWordsFound(sentences: string[]): number {

    const wordCount = sentences.map((sent) => {
        return sent.split(" ").length;
    })
  
    return Math.max(...wordCount);
};