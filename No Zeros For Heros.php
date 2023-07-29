<?php

function noBoringZeros($number)
{
	// Convert the number to a string to remove any trailing zeros
	$numberStr = (string) $number;

	// Check if the number ends with zeros
	if (substr($numberStr, -1) === '0') {
		// Remove trailing zeros and any leading whitespace
		$numberStr = rtrim($numberStr, '0');
	}

	// Convert back to a float or integer depending on the original number type
	return is_float($number) ? (float) $numberStr : (int) $numberStr;
}
