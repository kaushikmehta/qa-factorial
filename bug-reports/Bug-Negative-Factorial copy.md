# Negative Factorial Bug
Factorial calculators are able to calculate the factorial of both positive and negative integers. Upon inspection, it looks like the factorial calculator online can only calculate the factorial of positive integers. 

## Steps to reproduce
1. Navigate to factorial calculator
2. Enter Negative Integer (eg: -5)

## Expected Result
For the input -5, the output should be -120. 

## Actual Result
The actual result is an internal server error (Status code 500) without anything displayed to the user - see image below for network response header. If the calculator is designed to only calculate positive integers, the input box should be validated to only accept positive integers or the expected result should be displayed.

![alt text](images/negative-response-header.png)