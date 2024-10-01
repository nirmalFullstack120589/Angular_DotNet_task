using System;

public class BinaryStringEvaluator
{
    public static bool IsGoodBinaryString(string binaryString)
    {
        // Check for null or empty string
        if (string.IsNullOrEmpty(binaryString))
        {
            return false;
        }

        int count0 = 0;
        int count1 = 0;

        // Iterate through the binary string
        for (int i = 0; i < binaryString.Length; i++)
        {
            if (binaryString[i] == '0')
            {
                count0++;
            }
            else if (binaryString[i] == '1')
            {
                count1++;
            }
            else
            {
                // Invalid character found
                throw new ArgumentException("Input string must only contain '0' and '1'.");
            }

            // Check if at any prefix the number of '1's is less than the number of '0's
            if (count1 < count0)
            {
                return false;
            }
        }

        // Check if the number of '0's is equal to the number of '1's
        return count0 == count1;
    }

    public static void Main(string[] args)
    {
        // Test cases
        string[] testCases = {
            "1100",     // Good
            "1010",     // Good
            "111000",   // Good
            "1001",     // Bad
            "0110",     // Bad
            "000111",   // Good
            "010",      // Bad
            "0011",     // Bad
            "",          // Bad
            "110011"    // Good
        };

        foreach (var testCase in testCases)
        {
            Console.WriteLine($"Is '{testCase}' a good binary string? {IsGoodBinaryString(testCase)}");
        }
    }
}
