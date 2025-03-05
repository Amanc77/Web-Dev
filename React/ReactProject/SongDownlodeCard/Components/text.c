// Online C compiler to run C program online
#include <stdio.h>

int main() {

    int i , j;
    int count = 1;
    for (i = 1 ; i<=5 ; i++) {
        for (j = 5; j <= 5-i; j++) {
            printf("| ");
        }
       printf("\n");
    }

    for (i = 1 ; i<=5 ; i++) {
        for (j = 2; j <= i; j++) {
            printf("| ");
        }
       printf("\n");
    }
    return 0;
}