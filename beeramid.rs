fn beeramid(bonus: i32, price: f32) -> usize {
    let mut remaining_bonus = bonus;
    let mut level = 0;

    loop {
        let cans_needed = (level + 1) * (level + 1);
        let cost = cans_needed as f32 * price;

        if remaining_bonus >= cost as i32 {
            remaining_bonus -= cost as i32;
            level += 1;
        } else {
            break;
        }
    }

    level
}