package helpers

func StringSliceEquals(a, b []string) bool {
	if len(a) != len(b) {
		return false
	}

	// They are both empty/nil
	if len(a) == 0 {
		return true
	}

	set := map[string]int{}
	for _, i := range a {
		set[i] = set[i] + 1
	}

	for _, i := range b {
		set[i] = set[i] - 1
	}

	for _, i := range set {
		if i != 0 {
			return false
		}
	}

	return true
}

func MapStrings(strs []string, fn func(s string) string) []string {
	res := make([]string, len(strs))
	for idx, s := range strs {
		res[idx] = fn(s)
	}
	return res
}
