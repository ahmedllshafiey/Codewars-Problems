fn dna_to_rna(dna: &str) -> String {
    dna.chars()
        .map(|c| if c == 'T' { 'U' } else { c })
        .collect()
}