document.addEventListener("DOMContentLoaded", function() {
    // Define nutritional information and prices for each food item
    const foodItems = {
        cherryIcee: {
            small: {
                price: "$4.00",
                nutrition: {
                    calories: "95 Cal.",
                    protein: "0g",
                    carbs: "24g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "5mg",
                    fiber: "0g",
                    sugars: "24g",
                    vitaminD: "0mcg",
                    calcium: "0mg",
                    iron: "0mg",
                    potassium: "5mg",
                    caffeine: "0mg"
                }
            },
            medium: {
                price: "$5.00",
                nutrition: {
                    calories: "150 Cal.",
                    protein: "0g",
                    carbs: "36g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "10mg",
                    fiber: "0g",
                    sugars: "36g",
                    vitaminD: "0mcg",
                    calcium: "0mg",
                    iron: "0mg",
                    potassium: "10mg",
                    caffeine: "0mg"
                }
            },
            large: {
                price: "$6.00",
                nutrition: {
                    calories: "200 Cal.",
                    protein: "0g",
                    carbs: "48g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "15mg",
                    fiber: "0g",
                    sugars: "48g",
                    vitaminD: "0mcg",
                    calcium: "0mg",
                    iron: "0mg",
                    potassium: "15mg",
                    caffeine: "0mg"
                }
            }
        },
        blueRaspberryIcee: {
            small: {
                price: "$4.50",
                nutrition: {
                    calories: "100 Cal.",
                    protein: "0g",
                    carbs: "26g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "7mg",
                    fiber: "0g",
                    sugars: "26g",
                    vitaminD: "0mcg",
                    calcium: "0mg",
                    iron: "0mg",
                    potassium: "7mg",
                    caffeine: "0mg"
                }
            },
            medium: {
                price: "$5.50",
                nutrition: {
                    calories: "155 Cal.",
                    protein: "0g",
                    carbs: "39g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "12mg",
                    fiber: "0g",
                    sugars: "39g",
                    vitaminD: "0mcg",
                    calcium: "0mg",
                    iron: "0mg",
                    potassium: "12mg",
                    caffeine: "0mg"
                }
            },
            large: {
                price: "$6.50",
                nutrition: {
                    calories: "210 Cal.",
                    protein: "0g",
                    carbs: "52g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "17mg",
                    fiber: "0g",
                    sugars: "52g",
                    vitaminD: "0mcg",
                    calcium: "0mg",
                    iron: "0mg",
                    potassium: "17mg",
                    caffeine: "0mg"
                }
            }
        },
        cocaCola: {
            small: {
                price: "$3.85",
                nutrition: {
                    calories: "140 Cal.",
                    protein: "0g",
                    carbs: "39g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "45mg",
                    fiber: "0g",
                    sugars: "39g",
                    vitaminD: "0mcg",
                    calcium: "0mg",
                    iron: "0mg",
                    potassium: "34mg",
                    caffeine: "34mg"
                }
            },
            medium: {
                price: "$4.85",
                nutrition: {
                    calories: "200 Cal.",
                    protein: "0g",
                    carbs: "54g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "65mg",
                    fiber: "0g",
                    sugars: "54g",
                    vitaminD: "0mcg",
                    calcium: "0mg",
                    iron: "0mg",
                    potassium: "45mg",
                    caffeine: "45mg"
                }
            },
            large: {
                price: "$5.85",
                nutrition: {
                    calories: "310 Cal.",
                    protein: "0g",
                    carbs: "86g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "95mg",
                    fiber: "0g",
                    sugars: "86g",
                    vitaminD: "0mcg",
                    calcium: "0mg",
                    iron: "0mg",
                    potassium: "65mg",
                    caffeine: "65mg"
                }
            }
        },
        barqs: {
            small: {
                price: "$3.85",
                nutrition: {
                    calories: "180 Cal.",
                    protein: "0g",
                    carbs: "44g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "65mg",
                    fiber: "0g",
                    sugars: "44g",
                    vitaminD: "0mcg",
                    calcium: "19mg",
                    iron: "0mg",
                    potassium: "10mg",
                    caffeine: "22mg"
                }
            },
            medium: {
                price: "$4.85",
                nutrition: {
                    calories: "250 Cal.",
                    protein: "0g",
                    carbs: "61g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "90mg",
                    fiber: "0g",
                    sugars: "61g",
                    vitaminD: "0mcg",
                    calcium: "27mg",
                    iron: "0mg",
                    potassium: "15mg",
                    caffeine: "33mg"
                }
            },
            large: {
                price: "$5.85",
                nutrition: {
                    calories: "370 Cal.",
                    protein: "0g",
                    carbs: "90g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "135mg",
                    fiber: "0g",
                    sugars: "90g",
                    vitaminD: "0mcg",
                    calcium: "40mg",
                    iron: "0mg",
                    potassium: "25mg",
                    caffeine: "50mg"
                }
            }
        },
        drPepper: {
            small: {
                price: "$3.85",
                nutrition: {
                    calories: "150 Cal.",
                    protein: "0g",
                    carbs: "12g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "75mg",
                    fiber: "0g",
                    sugars: "11g",
                    vitaminD: "0mcg",
                    calcium: "0mg",
                    iron: "0mg",
                    potassium: "10mg",
                    caffeine: "41mg"
                }
            },
            medium: {
                price: "$4.85",
                nutrition: {
                    calories: "200 Cal.",
                    protein: "0g",
                    carbs: "18g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "110mg",
                    fiber: "0g",
                    sugars: "18g",
                    vitaminD: "0mcg",
                    calcium: "0mg",
                    iron: "0mg",
                    potassium: "15mg",
                    caffeine: "55mg"
                }
            },
            large: {
                price: "$5.85",
                nutrition: {
                    calories: "250 Cal.",
                    protein: "0g",
                    carbs: "30g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "150mg",
                    fiber: "0g",
                    sugars: "30g",
                    vitaminD: "0mcg",
                    calcium: "0mg",
                    iron: "0mg",
                    potassium: "20mg",
                    caffeine: "70mg"
                }
            }
        },
        fanta: {
            small: {
                price: "$3.85",
                nutrition: {
                    calories: "270 Cal.",
                    protein: "0g",
                    carbs: "73g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "90mg",
                    fiber: "0g",
                    sugars: "72g",
                    vitaminD: "0mcg",
                    calcium: "0mg",
                    iron: "0.1mg",
                    potassium: "20mg",
                    caffeine: "0mg"
                }
            },
            medium: {
                price: "$4.85",
                nutrition: {
                    calories: "360 Cal.",
                    protein: "0g",
                    carbs: "98g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "120mg",
                    fiber: "0g",
                    sugars: "96g",
                    vitaminD: "0mcg",
                    calcium: "0mg",
                    iron: "0.2mg",
                    potassium: "27mg",
                    caffeine: "0mg"
                }
            },
            large: {
                price: "$5.85",
                nutrition: {
                    calories: "480 Cal.",
                    protein: "0g",
                    carbs: "128g",
                    fat: "0g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "160mg",
                    fiber: "0g",
                    sugars: "128g",
                    vitaminD: "0mcg",
                    calcium: "0mg",
                    iron: "0.3mg",
                    potassium: "37mg",
                    caffeine: "0mg"
                }
            }
        },
        pepsi: {
            small: {
                price: "$3.85",
                nutrition: {
                    calories: "155 Cal.",
                    protein: "0g",
                    carbs: "38g",
                    fat: "0.9g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "9mg",
                    fiber: "0g",
                    sugars: "37g",
                    vitaminD: "0mcg",
                    calcium: "3.7mg",
                    iron: "0.1mg",
                    potassium: "18.5mg",
                    caffeine: "33.3mg"
                }
            },
            medium: {
                price: "$4.85",
                nutrition: {
                    calories: "210 Cal.",
                    protein: "0g",
                    carbs: "52g",
                    fat: "1.2g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "12mg",
                    fiber: "0g",
                    sugars: "51g",
                    vitaminD: "0mcg",
                    calcium: "5mg",
                    iron: "0.15mg",
                    potassium: "25mg",
                    caffeine: "45mg"
                }
            },
            large: {
                price: "$5.85",
                nutrition: {
                    calories: "320 Cal.",
                    protein: "0g",
                    carbs: "78g",
                    fat: "1.8g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "18mg",
                    fiber: "0g",
                    sugars: "76g",
                    vitaminD: "0mcg",
                    calcium: "7mg",
                    iron: "0.22mg",
                    potassium: "35mg",
                    caffeine: "67mg"
                }
            }
        },
        popcorn: {
            small: {
                price: "$5.00",
                nutrition: {
                    calories: "55 Cal.",
                    protein: "1g",
                    carbs: "6.3g",
                    fat: "3.1g",
                    saturatedFat: "0.5g",
                    polyFat: "1.5g",
                    monoFat: "0.9g",
                    cholesterol: "0mg",
                    sodium: "97mg",
                    fiber: "1.1g",
                    sugars: "0g",
                    vitaminD: "0mcg",
                    calcium: "1.1mg",
                    iron: "0.3mg",
                    potassium: "24.8mg",
                    caffeine: "0mg"
                }
            },
            medium: {
                price: "$7.50",
                nutrition: {
                    calories: "110 Cal.",
                    protein: "2g",
                    carbs: "12.6g",
                    fat: "6.2g",
                    saturatedFat: "1g",
                    polyFat: "3g",
                    monoFat: "1.8g",
                    cholesterol: "0mg",
                    sodium: "194mg",
                    fiber: "2.2g",
                    sugars: "0g",
                    vitaminD: "0mcg",
                    calcium: "2.2mg",
                    iron: "0.6mg",
                    potassium: "49.6mg",
                    caffeine: "0mg"
                }
            },
            large: {
                price: "$10.00",
                nutrition: {
                    calories: "165 Cal.",
                    protein: "3g",
                    carbs: "18.9g",
                    fat: "9.3g",
                    saturatedFat: "1.5g",
                    polyFat: "4.5g",
                    monoFat: "2.7g",
                    cholesterol: "0mg",
                    sodium: "291mg",
                    fiber: "3.3g",
                    sugars: "0g",
                    vitaminD: "0mcg",
                    calcium: "3.3mg",
                    iron: "0.9mg",
                    potassium: "74.4mg",
                    caffeine: "0mg"
                }
            },
            extraLarge: {
                price: "$12.00",
                nutrition: {
                    calories: "220 Cal.",
                    protein: "4g",
                    carbs: "25.2g",
                    fat: "12.4g",
                    saturatedFat: "2g",
                    polyFat: "6g",
                    monoFat: "3.6g",
                    cholesterol: "0mg",
                    sodium: "388mg",
                    fiber: "4.4g",
                    sugars: "0g",
                    vitaminD: "0mcg",
                    calcium: "4.4mg",
                    iron: "1.2mg",
                    potassium: "99.2mg",
                    caffeine: "0mg"
                }
            }
        },
        sprite: {
            small: {
                price: "$3.85",
                nutrition: {
                    calories: "192 Cal.",
                    protein: "0.2g",
                    carbs: "49g",
                    fat: "0.1g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "44mg",
                    fiber: "0g",
                    sugars: "38g",
                    vitaminD: "0mcg",
                    calcium: "10mg",
                    iron: "0.1mg",
                    potassium: "5mg",
                    caffeine: "0mg"
                }
            },
            medium: {
                price: "$4.85",
                nutrition: {
                    calories: "256 Cal.",
                    protein: "0.3g",
                    carbs: "65g",
                    fat: "0.1g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "58mg",
                    fiber: "0g",
                    sugars: "50g",
                    vitaminD: "0mcg",
                    calcium: "13mg",
                    iron: "0.1mg",
                    potassium: "6mg",
                    caffeine: "0mg"
                }
            },
            large: {
                price: "$5.85",
                nutrition: {
                    calories: "384 Cal.",
                    protein: "0.4g",
                    carbs: "98g",
                    fat: "0.2g",
                    saturatedFat: "0g",
                    polyFat: "0g",
                    monoFat: "0g",
                    cholesterol: "0mg",
                    sodium: "87mg",
                    fiber: "0g",
                    sugars: "75g",
                    vitaminD: "0mcg",
                    calcium: "20mg",
                    iron: "0.2mg",
                    potassium: "9mg",
                    caffeine: "0mg"
                }
            }
        }
    };

    // Get the current food item from the HTML's data attribute
    const foodItem = document.documentElement.getAttribute("data-fooditem");

    function updateSize(size) {
        const item = foodItems[foodItem][size];
        document.getElementById("price").textContent = item.price;

        document.getElementById("calories").innerHTML = item.nutrition.calories + '<p class="underneathlabels">Calories</p>';
        document.getElementById("protein").innerHTML = item.nutrition.protein + '<p class="underneathlabels">Protein</p>';
        document.getElementById("carbs").innerHTML = item.nutrition.carbs + '<p class="underneathlabels">Total Carbs</p>';
        document.getElementById("fat").innerHTML = item.nutrition.fat + '<p class="underneathlabels">Total Fat</p>';

        document.getElementById("saturatedFat").textContent = "Saturated Fat: " + item.nutrition.saturatedFat;
        document.getElementById("polyFat").textContent = "Polyunsaturated Fat: " + item.nutrition.polyFat;
        document.getElementById("monoFat").textContent = "Monounsaturated Fat: " + item.nutrition.monoFat;
        document.getElementById("cholesterol").textContent = "Cholesterol: " + item.nutrition.cholesterol;
        document.getElementById("sodium").textContent = "Sodium: " + item.nutrition.sodium;
        document.getElementById("fiber").textContent = "Dietary Fiber: " + item.nutrition.fiber;
        document.getElementById("sugars").textContent = "Sugars: " + item.nutrition.sugars;
        document.getElementById("vitaminD").textContent = "Vitamin D: " + item.nutrition.vitaminD;
        document.getElementById("calcium").textContent = "Calcium: " + item.nutrition.calcium;
        document.getElementById("iron").textContent = "Iron: " + item.nutrition.iron;
        document.getElementById("potassium").textContent = "Potassium: " + item.nutrition.potassium;
        document.getElementById("caffeine").textContent = "Caffeine: " + item.nutrition.caffeine;

        // Display the nutrition tables
        document.getElementById("nutritionTable1").style.display = "table";
        document.getElementById("nutritionTable2").style.display = "table";
    }

    // Add event listeners to size buttons
    document.getElementById("smallButton").addEventListener("click", () => updateSize("small"));
    document.getElementById("mediumButton").addEventListener("click", () => updateSize("medium"));
    document.getElementById("largeButton").addEventListener("click", () => updateSize("large"));
    document.getElementById("extraLargeButton").addEventListener("click", () => updateSize("extraLarge"));

});
