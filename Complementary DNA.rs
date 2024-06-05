fn dna_strand(dna: &str) -> String {
    let mut res: String = String::new();
    for i in dna.chars() {
        match i {
            'A' => res.push('T'),
            'T' => res.push('A'),
            'G' => res.push('C'),
            'C' => res.push('G'),
            _ => (),
        }
    }

    res
}
