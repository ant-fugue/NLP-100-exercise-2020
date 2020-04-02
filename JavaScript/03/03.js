/*
"Now I need a drink, alcoholic of course, 
after the heavy lectures involving quantum mechanics."
という文を単語に分解し，各単語の（アルファベットの）文字数を
先頭から出現順に並べたリストを作成せよ．*/

// split string by space
// match comma with regexp and eliminate comma
// match dot with regexp and eliminate dot
// apply length method to the array


"Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.".replace(/','/g, '').split(/\s/).map(a => a.length);

