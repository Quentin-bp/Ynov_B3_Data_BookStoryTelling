import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt


men_labels = [
    "Albums de bandes dessinées",
    "Livres sur l'histoire",
    "Pratiques, arts de vivre et loisirs",
    "Livres scientifiques, techniques ou professionnels",
    "Dictionnaire(s) / encyclopédie(s) "
]
women_labels=[
        "Pratiques, arts de vivre et loisirs",
        "Autres genres de romans",
        "Romans policiers, d'espionnage",
        "Livres pour enfants",
        "Dictionnaires / encyclopédies"
]

men_value=[51,50,45,42,41]
women_value=[66,57,50,49,46]

df_women= pd.DataFrame({"Label" : women_labels,  "Taux": women_value})
df_men = pd.DataFrame({"Label" : men_labels,  "Taux": men_value})

mainTitle = "Répartition de la lecture par catégorie chez"
sns.barplot(x=df_women.Label, y=df_women.Taux).set(title=mainTitle +"une femme")
sns.barplot(x=df_men.Label, y=df_men.Taux).set(title=mainTitle + " un homme")
#plt.xlabel('Taux (en %)', fontsize=14)
plt.show()