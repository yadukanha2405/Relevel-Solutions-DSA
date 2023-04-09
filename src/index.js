function someElements(p, q, n) {
  let pMaxElement = Math.max(...p);
  let resulArray = new Array(pMaxElement).fill(0);
  for (let i = 0; i < p.length; i++) {
    resulArray[p[i] - 1] = q[i];
  }
  let prev = resulArray[n - 2];
  let next = resulArray[n];
  return Math.ceil((prev + next) / 2);
}

console.log(someElements([2, 6, 4], [9, 2, 7], 3));

/*
Some Elements

Question Name: Some elements

Problem Statement

Antonio bought an array A, from a nearby arrays shop(name of the shop) having the following properties :

All array elements were non-negative integers(i.e. Greater than or equal to 0).
All array elements were pairwise distinct(i.e. If i ≠ j, Ai ≠ Aj).
Antonio just loved this array but somehow lost it. As Antonio had played with the array for a very long time, he remembers N facts about the array. These N facts are given to you as two arrays P and Q. The ith fact is that the Pith largest element of the array is Qi.

As Antonio has lost the array, he has become very sad, and you want to cheer him up. The only way to do that is to tell him the maximum possible length of the array such that it satisfies the given two conditions and the given N facts.

Input Format

First line contains a single integer denoting N.
Next line contains N space separated integers denoting the elements of array P.
Next line contains N space separated integers denoting the elements of array Q.
Output Format

Print the maximum possible length of the array such that it satisfies the given two conditions and the given N facts.
Constraints

1<=N<=10^5
1<=Pi<=10^9
0<=Qi<=10^9
The elements of array P are pairwise distinct.
It is guaranteed that there exists at least one array that satisfies the given two conditions and given N facts.
Sample Input 1

3

2 6 4

9 2 7

Sample Output 1

8

Explanation of Sample 1

One of the possible arrays is = [1, 5, 2,100, 0, 9, 7, 8].

Here all the elements of the array are positive integers and are pairwise distinct.

The 1st largest element of the array = 100

The 2nd largest element of the array = 9

The 3rd largest element of the array = 8

The 4th largest element of the array = 7

The 5th largest element of the array = 5

The 6th largest element of the array = 2

The 7th largest element of the array = 1

The 8th largest element of the array = 0

Hence the array satisfies all the given N facts.

 



*/
