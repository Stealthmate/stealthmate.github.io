---
layout: default
toc: true
title: A mathematical justification for the assumption the electric field around an infinite charged cylinder is orthogonal to its surface
---

# Preface

$$
\gdef\vec#1{\mathbf{#1}}
\gdef\abs#1{\lvert #1 \rvert}
$$

I have recently been reading on electrodynamics and in my textbook I encountered the problem of calculating the electric field around an infinite charged cylinder using Gauss's law. The author of the book solved this on the assumption that the field is always orthogonal to any concentric cylinder around the charge. That is, it looks like this when viewed fro m the top

<img style="margin: auto; width: 500px; display: block;" src="{{ '/assets/images/01-cylinder-vector-field.png' | relative_url }}" />

I understand the intuitive reasoning behind this, however I was looking for a mathematical proof of that, and since I didn't find one, I constructed one myself. In this post I have layed out my process of reasoning and I hope that it will help other people as well.

# Stating the problem mathematically

Given a cylinder with radius $R$, bounded by the surface

$$
F(x, y, z) = x^2 + y^2 - R^2 = 0
$$

and having uniform volume charge density $\rho$, show that the electric field at any pointoutside $F$, that is, any point $\vec p = (x_p, y_p, z_p)$ such that $x_p^2 + y_p^2 > R$, the total electric field is a scalar multiple of the surface normal

$$
\vec E(\vec p) = c\vec n = c\nabla F = c\begin{pmatrix}
2x \\
2y \\
0
\end{pmatrix}
$$

where $c$ is some constant and the electric field is given by integrating Coulomb's Law over the whole cylinder ($\vec x$ signifying the position of the infinitely small volume unit)

$$\vec E(\vec p) = \frac{\rho}{4\pi\epsilon_0}\iiint_V \frac{\vec p - \vec x}{\abs{\vec p - \vec x}^3} dv$$

Note that in the above, $\rho$ is uniform throughout the cylinder and can therefore be brought out of the integral as a constant.

# Part 1 - Solving for the $z$ dimension

First, we will show that for any $\vec p$ outside of the cylinder, the electric field's $z$ component at that point is zero. Let

$$
\vec p = \begin{pmatrix}
r_p\cos \theta_p \\
r_p\sin \theta_p \\
z_p
\end{pmatrix}
$$

Now the electric field's $z$ component is given by:

$$
\vec E(\vec p)_z = \frac{\rho}{4\pi\epsilon_0}\iiint_V \frac{z_p - z}{\abs{\vec p - \vec x}^3}dv = \frac{\rho}{4\pi\epsilon_0}\int_0^R\int_0^{2\pi}\int_{-\infty}^{+\infty} \frac{z_p - z}{\lvert \vec p - \vec x \rvert^3}dzd\theta dr
$$

- Note: I believe in this case the order of integration does not matter, however I do not have sufficient background to prove this (by e.g. applying Fubini's theorem).

Intuitively, integrating over $z$ should gives us the 0 we need, since the electric forces on the two sides of $\vec p$ will "cancel out" in the $z$ dimension. Therefore, let us consider our original expression only in terms of the innermost integral. That is, let us evaluate:

$$
I = \int_{-\infty}^{+\infty} \frac{z_p - z}{\abs{\vec p - \vec x}}dz
$$

First, we will focus on $\abs{\vec p - \vec x}$. It can be shown for any $\vec a$ and $\vec b$ that:

$$
\abs{\vec a - \vec b}^2 = \abs{\vec a}^2 - 2\vec a\cdot\vec b + \abs{\vec b}^2
$$

Applying this to the above yields:

$$
\begin{aligned}
\abs{\vec p - \vec x}^2 &= \abs{\vec p}^2 - 2\vec p\cdot\vec x + \abs{\vec x}^2 \\
&= \abs{\vec p}^2 - 2r_pr(\cos\theta_p\cos\theta + \sin\theta_p\sin\theta) - 2z_pz + r^2 + z^2 \\
&= \abs{\vec p}^2 - 2r_pr\cos(\theta_p - \theta) - 2z_pz + r^2 + z^2
\end{aligned}
$$

Since $I$ is an integral only in terms of $z$, we can treat everything except $z$ as a constant, which allows us to reduce the above to

$$
\abs{\vec p - \vec x}^2 = z^2 - 2z_pz + C
$$

therefore yielding:

$$
I = \int_{-\infty}^{+\infty} \frac{z_p - z}{\sqrt{z^2 - 2z_pz + C}^3}dz
$$

We will now substitute $u = z^2 - 2z_pz + C$. Since $u = \abs{\vec p - \vec x}^2$, by the definition of the [inner product](https://en.wikipedia.org/wiki/Inner_product_space#Definition) $u$ is strictly positive, so taking the square root is well-defined. On the other hand, this is not an injective substitution, however since $u$ is symmetric around $z = z_p$, we can split $I$ into two parts where $u$ will be injective in each. That is, we write

$$
\begin{aligned}
I &= \int_{-\infty}^{+\infty} \frac{z_p - z}{\sqrt{z^2 - 2z_pz + C}^3}dz \\
&= \int_{-\infty}^{0}\frac{z_p - z}{\sqrt{z^2 - 2z_pz + C}^3}dz + \int_0^\infty \frac{z_p - z}{\sqrt{z^2 - 2z_pz + C}^3}dz
\end{aligned}
$$

Finally, we have $du = (2z - 2z_p)dz = 2(z - z_p)dz$ or simply $\frac{1}{2}du = (z - z_p)dz$, which fits nicely into $I$, yielding:

$$
\begin{aligned}
I &= -\int_{\infty}^{u(z_p)}\frac{du}{\sqrt{u}^3} - \int_{u(z_p)}^\infty \frac{du}{\sqrt{u}^3} \\
&= \int_{u(z_p)}^{\infty}\frac{du}{\sqrt{u}^3} - \int_{u(z_p)}^\infty \frac{du}{\sqrt{u}^3} \\
&= 0
\end{aligned}
$$

We have shown that $I = 0$. If we plug this back into our electric field integral, we get

$$
\vec E(\vec p)_z = \frac{\rho}{4\pi\epsilon_0}\int_0^R\int_0^{2\pi} Id\theta dr = \frac{\rho}{4\pi\epsilon_0}\int_0^R\int_0^{2\pi} 0d\theta dr = 0
$$

Thus we have finally shown that the electric field's $z$ component is zero for any point outside the cylinder.

# Part 2 - Solving for the $x$ and $y$ dimensions

First, we will show that for a point $\vec p$ outside of the cylinder, its projection on the $z = 0$ plane is parallel to the normal of $F$. Take

$$
\vec p = \begin{pmatrix}
r_p\cos \theta_p \\
r_p\sin \theta_p \\
z_p
\end{pmatrix}
$$

Now we want to find the projection $\hat{\vec p}$ of $\vec p$ onto the $z = 0$ plane. We do this by solving

$$
\begin{aligned}
\hat{\vec p}\cdot\vec m &= 0 \\
\hat{\vec p} + \vec m &= \vec p
\end{aligned}
$$

where $m$ is the normal to the $z = 0$ plane. It is immediately evident that $\vec m = (0, 0, 1)$, which immediately gives us the solution

$$
\hat{\vec p} = \begin{pmatrix}
r_p\cos\theta_p \\
r_p\sin\theta_p \\
0
\end{pmatrix}
$$

The normal to $F$ at a point, say $\vec q$, on the surface is given by

$$
\vec n_q = \nabla F(\vec q) = \begin{pmatrix}
R\cos\theta_q \\
R\sin\theta_q \\
0
\end{pmatrix}
$$

If we take $\theta_q = \theta_p$, we can show that $\hat{\vec p}$ is indeed parallel to $\vec n_q$

$$
\hat{\vec p} = \frac{R}{r_p}\vec n_q
$$

The result we have obtained allows us to continue our proof by simply proving that the following is true for any $\vec p$

$$
\begin{aligned}
\vec E({\vec p})_x &= c\vec p_x = c\hat{\vec p}_x = c\frac{cR}{r_p}\vec n_x \\
\vec E({\vec p})_y &= c\vec p_y = c\hat{\vec p}_y = c\frac{cR}{r_p}\vec n_y
\end{aligned}
$$

---

From now on, all vectors shall be treated as 2-dimensional, consiting of only $x$ and $y$ components.

Recall the electric field is given by

$$
\begin{aligned}
\vec E(\vec p) &= \frac{\rho}{4\pi\epsilon_0}\iiint_V \frac{(\vec p - \vec x)}{\abs{\vec p - \vec x}}dv \\
&= \frac{\rho}{4\pi\epsilon_0}\Bigg[ \vec p\iiint_V \frac{dv}{\abs{\vec p - \vec x}} - \iiint_v\frac{\vec x dv}{\abs{\vec p - \vec x}^3} \Bigg] \\
\end{aligned}
$$

Since $\iiint_V \frac{dv}{\abs{\vec p - \vec x}}$ is a scalar, we only need to show that

$$
\iiint_v\frac{\vec x dv}{\abs{\vec p - \vec x}^3} = c\vec p
$$

Consider the case for the $x$ component. We have

$$
\iiint_v\frac{r\cos\theta}{\abs{\vec p - \vec x}^3}dv = \int_{-\infty}^{\infty}\int_0^R\int_0^{2\pi} \frac{r\cos\theta}{\abs{\vec p - \vec x}^3}d\theta drdz
$$

- Note: Here I have changed the order of integration. This should be correct, although I do not have a proof that it is.

Recall that

$$
\abs{\vec p - \vec x}^2 = \abs{\vec p}^2 - 2r_pr\cos(\theta_p - \theta) - 2z_pz + r^2 + z^2
$$

This time we shall rewrite this expression preserving $\theta$. That is, we write

$$
\abs{\vec p - \vec x}^2 = 2r_pr\cos(\theta_p - \theta) + C
$$

Now we will solve for the innermost integral w.r.t. $\theta$.

$$
\begin{aligned}
I_x &= \int_0^{2\pi} \frac{r\cos\theta}{\abs{\vec p - \vec x}^3}d\theta \\
&= \int_0^{2\pi} \frac{r\cos\theta}{\sqrt{2r_pr\cos(\theta_p - \theta) + C}^3}d\theta
\end{aligned}
$$

Let $\alpha = \theta - \theta_p$ and $d\alpha = d\theta$. Since $\cos(x) = \cos(-x)$, we have:

$$
\begin{aligned}
I_x &= \int_{-\theta_p}^{2\pi - \theta_p} \frac{r\cos(\alpha + \theta_p)}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha \\
&= \int_{- \theta_p}^{2\pi - \theta_p} \frac{r(\cos\alpha\cos\theta_p - \sin\alpha\sin\theta_p)}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha \\
&= r\cos\theta_p\int_{- \theta_p}^{2\pi - \theta_p} \frac{\cos\alpha}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha - r\sin\theta_p\int_{- \theta_p}^{2\pi - \theta_p} \frac{\sin\alpha}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha \\
\end{aligned}
$$

Now let us focus on the latter part. Let $u = \cos\alpha$ and $-du = \sin\alpha d\alpha$. Again, this is not an injection and so we need to split the integral

$$
\begin{aligned}
\int_{- \theta_p}^{2\pi - \theta_p} \frac{\sin\alpha}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha &= \int_{- \theta_p}^{\pi - \theta_p} \frac{\sin\alpha}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha + \int_{\pi - \theta_p}^{2\pi - \theta_p} \frac{\sin\alpha}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha \\
&= -\int_{\cos\theta_p}^{\cos(\pi - \theta_p)} \frac{du}{\sqrt{2r_pru + C}^3} + \int_{\cos(\pi - \theta_p)}^{\cos(2\pi - \theta_p)} \frac{du}{\sqrt{2r_pru + C}^3}d \\
&= -\int_{\cos\theta_p}^{-\cos(\theta_p)} \frac{du}{\sqrt{2r_pru + C}^3} - \int_{-\cos(\theta_p)}^{\cos(\theta_p)} \frac{du}{\sqrt{2r_pru + C}^3}d \\
&= \int_{-\cos\theta_p}^{\cos(\theta_p)} \frac{du}{\sqrt{2r_pru + C}^3} - \int_{-\cos(\theta_p)}^{\cos(\theta_p)} \frac{du}{\sqrt{2r_pru + C}^3}d \\
&= 0
\end{aligned}
$$

We have shown that the integral is zero, which plugged back into $I_x$ gives

$$
I_x = r\cos\theta_p\int_{- \theta_p}^{2\pi - \theta_p} \frac{\cos\alpha}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha
$$

Plugging further back into $\vec E(\vec p)_x$, we have

$$
\begin{aligned}
\vec E(\vec p)_x &= \frac{\rho}{4\pi\epsilon_0}\Bigg[ \vec p_x\iiint_V \frac{dv}{\abs{\vec p - \vec x}} - \iiint_v\frac{\vec x_x dv}{\abs{\vec p - \vec x}^3} \Bigg] \\
&= \frac{\rho}{4\pi\epsilon_0}\Bigg[ \vec p_x\iiint_V \frac{dv}{\abs{\vec p - \vec x}} - \int_{-\infty}^{\infty}\int_0^R I_xdrdz \Bigg] \\
&= \frac{\rho}{4\pi\epsilon_0}\Bigg[ \vec p_x\iiint_V \frac{dv}{\abs{\vec p - \vec x}} - \int_{-\infty}^{\infty}\int_0^R \Bigg( r\cos\theta_p\int_{- \theta_p}^{2\pi - \theta_p} \frac{\cos\alpha}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha \Bigg)drdz \Bigg] \\
&= \frac{\rho\cos\theta_p}{4\pi\epsilon_0}\Bigg[ r_p\iiint_V \frac{dv}{\abs{\vec p - \vec x}} - \int_{-\infty}^{\infty}\int_0^R\int_{- \theta_p}^{2\pi - \theta_p} \frac{r\cos\alpha}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha drdz \Bigg] \\
&= \frac{\rho\cos\theta_p}{4\pi\epsilon_0}K
\end{aligned}
$$

For brevity, we take the formula in the square braces as $K$.

---

Now we need to show that $\vec E(\vec p)_y = \frac{\rho\sin\theta_p}{4\pi\epsilon_0}. Similar to $I_x$, we find that

$$
\begin{aligned}
I_y &= \int_{-\theta_p}^{2\pi - \theta_p} \frac{r\sin(\alpha + \theta_p)}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha \\
&= \int_{- \theta_p}^{2\pi - \theta_p} \frac{r(\sin\alpha\cos\theta_p + \cos\alpha\sin\theta_p)}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha \\
&= r\cos\theta_p\int_{- \theta_p}^{2\pi - \theta_p} \frac{\sin\alpha}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha + r\sin\theta_p\int_{- \theta_p}^{2\pi - \theta_p} \frac{\cos\alpha}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha \\
\end{aligned}
$$

We arrived at a similar formula to the one for $I_x$. From before, we know that the first part evaluates to zero and so

$$
I_y = r\sin\theta_p\int_{- \theta_p}^{2\pi - \theta_p} \frac{\cos\alpha}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha
$$

Again, we plug back into the electric field formula and we get

$$
\begin{aligned}
\vec E(\vec p)_y &= \frac{\rho}{4\pi\epsilon_0}\Bigg[ \vec p_y\iiint_V \frac{dv}{\abs{\vec p - \vec x}} - \iiint_v\frac{\vec x_y dv}{\abs{\vec p - \vec x}^3} \Bigg] \\
&= \frac{\rho}{4\pi\epsilon_0}\Bigg[ \vec p_y\iiint_V \frac{dv}{\abs{\vec p - \vec x}} - \int_{-\infty}^{\infty}\int_0^R I_ydrdz \Bigg] \\
&= \frac{\rho}{4\pi\epsilon_0}\Bigg[ \vec p_y\iiint_V \frac{dv}{\abs{\vec p - \vec x}} - \int_{-\infty}^{\infty}\int_0^R \Bigg( r\sin\theta_p\int_{- \theta_p}^{2\pi - \theta_p} \frac{\cos\alpha}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha \Bigg)drdz \Bigg] \\
&= \frac{\rho\sin\theta_p}{4\pi\epsilon_0}\Bigg[ r_p\iiint_V \frac{dv}{\abs{\vec p - \vec x}} - \int_{-\infty}^{\infty}\int_0^R\int_{- \theta_p}^{2\pi - \theta_p} \frac{r\cos\alpha}{\sqrt{2r_pr\cos\alpha + C}^3}d\alpha drdz \Bigg] \\
&= \frac{\rho\sin\theta_p}{4\pi\epsilon_0}K
\end{aligned}
$$

Thus we have shown that the above statement is true. We can now finally conclude our proof by showing that by taking $c = \frac{K\rho}{4\pi\epsilon_0r_p}$

$$
\begin{aligned}
\vec E(\vec p)_x &= c\vec p_x &= \frac{cR}{r_p}\vec n_x \\
\vec E(\vec p)_y &= c\vec p_y &= \frac{cR}{r_p}\vec n_y\\
\vec E(\vec p)_z &= 0 &= \frac{cR}{r_p}\vec n_z
\end{aligned}
$$

or more compactly

$$
\vec E(\vec p) = \frac{cR}{r_p}\vec n
$$

Q.E.D.
