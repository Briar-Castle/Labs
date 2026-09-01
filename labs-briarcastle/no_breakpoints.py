import pyperclip

print("\n ----------- for 800px to 1440px (much more general) ------------- \n")

mini = int(input("Minimum Value (pixel): "))
maxi = int(input("Maximum Value (pixel): "))


Diff = maxi - mini

growth_ratio = (Diff / 640)*100

extra_pixel = (growth_ratio * 360) / 100

print(f"Growth Ratio: {growth_ratio} \n Extra Pixel: {extra_pixel}")


deficit = extra_pixel - mini

print(f"Deficit: {deficit}")


result_str = f"clamp({(mini/16):.3f}rem, {growth_ratio:.3f}vw - {(deficit/16):.3f}rem, {(maxi/16):.3f}rem)"

print("We are copying this to your clipboard: \n", result_str)

pyperclip.copy(result_str)