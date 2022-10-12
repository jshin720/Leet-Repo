function mostWordsFound(sentences: string[]): number {
    let count: number = 0, max: number = 0;
    
    const wordCount = sentences.map((sent) => {
        return sent.split(" ").length;
    })
  
    return Math.max(...wordCount);
};