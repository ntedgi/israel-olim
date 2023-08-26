import pdfplumber

with pdfplumber.open("./00071706.81.CE.C0.4F.pdf") as pdf:
    first_page = pdf.pages[23]
    print(first_page.extract_text())

    