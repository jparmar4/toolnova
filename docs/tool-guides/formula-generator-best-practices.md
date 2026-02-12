# Formula Generator - Best Practices Guide

## Overview

The AI Formula Generator creates comprehensive formula sheets for Mathematics, Physics, Chemistry, and Economics. This guide helps you get the best results.

---

## Quick Tips

✅ **DO:**
- Be specific about the topic (e.g., "Chemical Equilibrium" not just "Chemistry")
- Choose the right format for your use case
- Enable examples for better understanding
- Use table format for printable reference sheets

❌ **DON'T:**
- Use vague topics like "math formulas"
- Mix multiple unrelated topics in one request
- Expect numerical problem solutions (use Homework Solver instead)

---

## Format Selection Guide

### 📋 List Format
**Best for:** Quick reference, digital note-taking, mobile viewing
**Output:** Bulleted list with formulas and brief notes

### 📊 Table Format
**Best for:** Printable sheets, comprehensive reference, exam prep
**Output:** Markdown table with Formula Name | Equation | Notes

### 📝 With Explanations
**Best for:** Learning new topics, understanding concepts
**Output:** Each formula with detailed explanation and usage context

---

## Complete Example: Chemical Equilibrium

### Input
```
Topic: Chemical Equilibrium
Subject: Chemistry
Format: Table Format
Include Examples: Enabled
```

### Expected Output Structure

The tool will generate a Markdown table like this:

| Formula Name | Equation | Notes |
| --- | --- | --- |
| General Reaction | aA + bB ⇌ cC + dD | Stoichiometric coefficients are exponents |
| Equilibrium Constant (Kc) | Kc = [C]^c [D]^d / ([A]^a [B]^b) | Concentration-based, at equilibrium |
| Equilibrium Constant (Kp) | Kp = (P_C)^c (P_D)^d / ((P_A)^a (P_B)^b) | Pressure-based for gases |
| Kp-Kc Relation | Kp = Kc(RT)^Δn | Δn = (c+d) - (a+b) |
| Reaction Quotient (Q) | Q = [C]^c [D]^d / ([A]^a [B]^b) | Use current concentrations |
| Direction Rule | If Q < K → forward; Q > K → reverse; Q = K → equilibrium | Predicts shift direction |
| Gibbs Free Energy | ΔG = ΔG° + RT ln Q | At equilibrium: ΔG = 0 |
| Standard Gibbs and K | ΔG° = -RT ln K | Links thermodynamics to equilibrium |
| van't Hoff Equation | ln(K₂/K₁) = -ΔH°/R (1/T₂ - 1/T₁) | Temperature dependence |
| Solubility Product | Ksp = [M^n+]^m [X^m-]^n | For MmXn(s) ⇌ mM^n+ + nX^m- |
| ICE Table | I: initial; C: change; E: equilibrium | Systematic approach to problems |

### Sample Prompt for Best Results

```
Generate a complete formula sheet for Chemistry on Chemical Equilibrium.

Include:
- General reaction form and stoichiometry
- Equilibrium constants (Kc, Kp) with clear notation
- Relationship between Kp and Kc
- Reaction quotient (Q) and direction prediction
- Gibbs free energy relations
- van't Hoff equation for temperature effects
- Solubility product (Ksp)
- ICE table method
- All symbol definitions (R, T, ΔG°, ΔH°, etc.)

Present as a Markdown table with columns: Formula Name | Equation | Notes
Include brief notes explaining when each formula is used.
```

---

## Subject-Specific Tips

### 🔢 Mathematics
- Be specific: "Trigonometric identities" not "trig"
- Mention level if relevant: "Calculus derivatives - basic rules"
- For geometry: specify 2D vs 3D

**Example topics:**
- Quadratic formula and completing the square
- Integration by parts and substitution
- Logarithm properties and laws
- Vector operations in 3D space

### ⚛️ Physics
- Include context: "Rotational motion" vs "Linear motion"
- Specify system: "Ideal gas laws" vs "Real gas equations"
- Mention units when important

**Example topics:**
- Newton's laws and force equations
- Electromagnetic induction formulas
- Relativistic energy and momentum
- Thermodynamic processes (isothermal, adiabatic)

### 🧪 Chemistry
- Specify type: "Organic reactions" vs "Inorganic complexes"
- Include conditions: "STP formulas" vs "Non-ideal conditions"
- Mention if you need equilibrium vs kinetics

**Example topics:**
- Acid-base equilibrium and pH calculations
- Redox reactions and electrochemistry
- Rate laws and Arrhenius equation
- Thermochemistry (enthalpy, entropy, Gibbs)

### 📊 Economics
- Specify micro vs macro
- Include model context when relevant

**Example topics:**
- Price elasticity of demand formulas
- GDP calculation methods
- Present value and compound interest
- Production cost analysis

---

## Getting Comprehensive Results

### For Complete Formula Sheets:
1. **Use specific sub-topics** rather than broad subjects
2. **Enable examples** to see formula applications
3. **Choose table format** for organized reference
4. **List what you need** if topic is broad:

```
Topic: Thermodynamics formulas including:
- First and second laws
- Entropy calculations
- Carnot cycle efficiency
- Heat engine formulas
```

### For Quick Reference:
1. **Use list format** for faster generation
2. **Disable examples** if you know the formulas
3. **Focus on one concept** at a time

---

## Common Issues & Solutions

### Issue: Getting theory instead of formulas
**Solution:** Explicitly request "formulas" or "equations" in your input. Use table format.

### Issue: Missing important formulas
**Solution:** List specific formulas you need in your input.

### Issue: Unclear notation
**Solution:** Specify notation system (e.g., "use standard physics notation with vectors")

### Issue: Too basic or too advanced
**Solution:** Mention level: "high school chemistry" vs "undergraduate physical chemistry"

---

## Pro Tips

1. **Combine with other tools:**
   - Use Concept Explainer for understanding theory
   - Use Homework Solver for applying formulas to problems
   - Use Notes Generator for complete study materials

2. **Save your outputs:**
   - Copy table format into Word/Google Docs
   - Use History feature to access previous formula sheets
   - Download as text file for offline reference

3. **Customize for exams:**
   - Request only formulas allowed on your exam
   - Specify format matching your exam sheet layout
   - Include unit conversions if needed

4. **Build formula collections:**
   - Generate related topics separately
   - Combine outputs into comprehensive study guides
   - Organize by difficulty or exam relevance

---

## Example Requests That Work Well

✅ "Trigonometry: all sum and difference identities, double angle formulas, and half angle formulas"

✅ "Kinematics equations for uniformly accelerated motion in 1D and 2D"

✅ "Organic chemistry: functional group reactions including oxidation and reduction"

✅ "Microeconomics: all elasticity formulas with interpretation"

---

## Need More Help?

- Try different format options to see what works best
- Start with explained format when learning
- Switch to table format for exam prep
- Use list format for quick lookups

For problem-solving with these formulas, use the **Homework Solver** tool.
For understanding concepts behind the formulas, use the **Concept Explainer** tool.