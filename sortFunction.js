let selectionSorting = `
// Using Selection Sort
#include<iostream>
using namespace std;
void Sorting(int arr[], int n) {
    for (int i=0; i<n; i++) {
        for (int j=i+1; j<n; j++) {
            if (arr[i]>arr[j]) {
                swap(arr[i], arr[j]);
            }
        }
    }
}
void Printing(int arr[], int n) {
    for (int i=0; i<n; i++) {
        cout<<arr[i]<<" ";
    }
}
int main () {
    int arr[1000];
    int n;
    cout<<"Enter the size of the array: ";
    cin>>n;
    cout<<"Enter the array: ";
    for (int i=0; i<n; i++) {
        cin>>arr[i];
    }
    Sorting(arr, n);
    cout<<"Sorted array is: ";
    Printing(arr,n);

}
`
let bubbleSorting = `// Using comparison of two index , then next two index:

#include<iostream>
using namespace std;
bool Bubble(int arr[], int n) {
    bool swapped= false;
    for (int i=0; i<n-1; i++) { 
        for (int j=0; j<n-1-i; j++) {
            if (arr[j]>arr[j+1]) {
                swap(arr[j], arr[j+1]);
                swapped= true;
            }
        }
        if (swapped==false) {
            // First round tell already sorted
            break;
        }
    }
    return swapped;
}
int main () {
    int arr[100]= {5,4,2,1,3};
    int n=5;
    bool x= Bubble(arr, n);
    if (!x) {
        cout<<" Already Sorted";
    }else
    for (int i=0; i<n; i++) {
        cout<<arr[i]<<" ";
    }
}
// If size of array n then loop n-1;
// every round the largest number fix most left side
// 1st round - - - - 5
// 2nd round - - - 4 5
//3rd round  - - 3 4 5
// 4th round - 2 3 4 5
// No need to fifth round 1 is already fixed thats why n-1;
// And we know every round last element got fix then we less loop of j no need to fix again fixed element`


let insertionSorting = `#include <iostream>
using namespace std;
void Insertion(int arr[], int n)
{
  for (int i = 1; i < n; i++)
  {
    int temp = arr[i];
    int j = i - 1;
    for (j; j >= 0; j--)
    {
      if (arr[j] > temp)
      {
        arr[j + 1] = arr[j];
      }
      else
      {
        break;
      }
    }
    arr[j +1] = temp;
  }
}
int main()
{
  int arr[10] = {9, 6, 3, 1, 4};
  int n = 5;
  Insertion(arr, n);
  for (int i = 0; i < n; i++)
  {
    cout << arr[i] << " ";
  }
}`

let quickSorting = `#include<iostream> 
using namespace std;
int partition(int *arr, int s, int e){
   int p = arr[s];
   int cnt=0;

   for (int i=s+1; i<=e; i++){
      if (arr[i]<p) cnt++;
   }

   int pIndex = s + cnt;

   swap(arr[pIndex], arr[s]);
   
   int i=s, j=e;

   while (i<pIndex && j>pIndex) {
      while(arr[i]<p){
         i++;
      }
      while(arr[j]>p){
         j--;
      }
      if (i<pIndex && j>pIndex) {
        swap(arr[i], arr[j]);
        i++;
        j--;
      }
   }

   return pIndex;
}
void quickSort(int *arr, int s, int e){
  if (s>=e) return ;
  int p = partition(arr, s, e);
  //left wala 
  quickSort(arr, s, p-1);

  //right wala
  quickSort(arr, p+1, e);
}

int main (){
    int arr[]={6,6,-6,-2,-4, -6, 2 ,-6};
    int n=8;
    quickSort(arr, 0, n-1);
    for (int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }
}`

let mergeSorting = `#include<iostream>
#include<bits/stdc++.h>
using namespace std;
void merge(vector<int> &arr, int low, int mid, int high){
   vector<int> temp;
   int left = low;
   int right = mid+1;
   while(left<=mid && right<=high){
      if(arr[left]<=arr[right]){
         temp.push_back(arr[left]);
         left++;
      }else{
         temp.push_back(arr[right]);
         right++;
      }
   }
   while(left<=mid){
      temp.push_back(arr[left]);
      left++;
   }
   while(left<=mid){
      temp.push_back(arr[right]);
      right++;
   }
   for(int i=0, j=low; i<temp.size(); i++, j++){
     arr[j]= temp[i];
   }
}
void mergeSort(vector<int> &arr, int low, int high){
   if(low>=high){
      return;
   }
   int mid = (low+high)/2;
   mergeSort(arr,low, mid);
   mergeSort(arr, mid+1, high);
   merge(arr,low,mid,high);
}
int main (){
   vector<int> arr = {2,34,22,33,1,3,5};
   int n =7;
   mergeSort(arr,0, n-1);
   for(int i: arr){
      cout<<i<<" ";
   }
}`

module.exports ={
    selectionSorting,quickSorting,mergeSorting,bubbleSorting,insertionSorting
}