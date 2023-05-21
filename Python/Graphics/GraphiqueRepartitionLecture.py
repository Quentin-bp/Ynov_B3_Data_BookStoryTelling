import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
# https://www.ipsos.com/sites/default/files/ct/news/documents/2019-03/les_francais_et_la_lecture_2019.pdf


libelle = [
    "Pratiques, arts de vivre et loisirs",
    "Bandes dessinées",
    "livres sur l'histoire",
    "Dictionnaires ou encyclopédies",
    "Romans policiers, d'espionnage",
    "Livres d'art, beaux livres illustrés",
    "Livres pour enfants",
    "Littérature classique",
    "Livres scientifiques, prof.",
    "Livres de dev. perso., psycho.",
    "Essais politiques, religieux...",
    "Romans de SF/heroic-fantasy...",
    "Livres de reportages d'actualité",
    "Mangas, comics...",
    "Autres genres de livres",
    "Livres de poésie",
    "Romans sentimentaux",
    "Autres genres de romans",
]

rates = [
    56,45,45,44,43,43,39,38,35,35,33,30,30,22,21,21,15,46
]

df = pd.DataFrame({"libelle" : libelle, "taux" : rates})
df = df.sort_values(['taux'], ascending=False).reset_index(drop=True)
sns.barplot(y=df.libelle, x=df.taux).set(title='Répartition de la lecture par catégorie')

plt.xlabel('Taux (en %)', fontsize=14)
plt.show()