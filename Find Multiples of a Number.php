<?php
function findMultiples(int $integer, int $limit): array
{
	$arr = array();
	for ($i = 1; $i <= $limit; $i++) {
		if ($i % $integer === 0) {
			array_push($arr, $i);
		}
	}

	return $arr;
}

echo print_r(findMultiples(2, 6));
